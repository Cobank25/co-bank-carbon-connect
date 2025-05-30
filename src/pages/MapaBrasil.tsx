
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ZoomIn, ZoomOut, Map, Users, MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapaBrasil = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const [shouldInitializeMap, setShouldInitializeMap] = useState(false);

  const regionsData = {
    som: {
      name: 'SOM - Região BH (100km)',
      producers: 43500,
      color: '#22c55e',
      description: 'Raio de 100km de Belo Horizonte',
      coordinates: [-43.9378, -19.9208],
      zoom: 8
    },
    sam: {
      name: 'SAM - Minas Gerais',
      producers: 386000,
      color: '#3b82f6',
      description: 'Estado de Minas Gerais',
      coordinates: [-45.2471, -18.5122],
      zoom: 6
    },
    tam: {
      name: 'TAM - Brasil',
      producers: 4080000,
      color: '#8b5cf6',
      description: 'Todo território nacional',
      coordinates: [-47.8825, -15.7942],
      zoom: 4
    }
  };

  // Efeito para inicializar o mapa após o container estar disponível
  useEffect(() => {
    if (shouldInitializeMap && !showTokenInput && mapboxToken) {
      console.log('useEffect: Inicializando mapa após container estar disponível');
      initializeMap(mapboxToken);
      setShouldInitializeMap(false);
    }
  }, [shouldInitializeMap, showTokenInput, mapboxToken]);

  const initializeMap = (token: string) => {
    console.log('Inicializando mapa com token:', token.substring(0, 20) + '...');
    
    if (!mapContainer.current) {
      console.error('Container do mapa não encontrado, tentando novamente...');
      setTimeout(() => {
        if (mapContainer.current) {
          console.log('Container encontrado na segunda tentativa');
          initializeMap(token);
        } else {
          setMapError('Container do mapa não pôde ser criado');
        }
      }, 100);
      return;
    }

    try {
      mapboxgl.accessToken = token;
      console.log('Token configurado, criando mapa...');
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-47.8825, -15.7942],
        zoom: 4,
        pitch: 45,
        bearing: 0,
        antialias: true
      });

      console.log('Mapa criado, adicionando controles...');

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        console.log('Mapa carregado com sucesso!');
        
        // Add terrain and atmosphere
        map.current?.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14
        });

        map.current?.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

        map.current?.setFog({
          color: 'rgb(10, 20, 30)',
          'high-color': 'rgb(20, 40, 60)',
          'horizon-blend': 0.02,
        });

        // Add SOM region (Círculo BH)
        map.current?.addSource('som-region', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-43.9378, -19.9208]
            },
            properties: { region: 'som' }
          }
        });

        map.current?.addLayer({
          id: 'som-circle',
          type: 'circle',
          source: 'som-region',
          paint: {
            'circle-radius': {
              'base': 1.75,
              'stops': [[5, 20], [12, 80]]
            },
            'circle-color': regionsData.som.color,
            'circle-opacity': 0.6,
            'circle-stroke-width': 3,
            'circle-stroke-color': regionsData.som.color,
            'circle-stroke-opacity': 1
          }
        });

        // Add interactive markers for each region
        Object.entries(regionsData).forEach(([key, region]) => {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="bg-gray-900 text-white p-3 rounded-lg">
              <h3 class="font-bold text-green-400">${region.name}</h3>
              <p class="text-sm">${region.producers.toLocaleString()} pequenos produtores</p>
              <p class="text-xs text-gray-300">${region.description}</p>
            </div>
          `);

          const marker = new mapboxgl.Marker({
            color: region.color,
            scale: 1.2
          })
            .setLngLat(region.coordinates as [number, number])
            .setPopup(popup)
            .addTo(map.current!);

          marker.getElement().addEventListener('click', () => {
            setSelectedRegion(key);
          });
        });
      });

      map.current.on('error', (e) => {
        console.error('Erro no mapa:', e);
        setMapError('Erro ao carregar o mapa: ' + e.error?.message || 'Erro desconhecido');
      });

    } catch (error) {
      console.error('Erro ao inicializar mapa:', error);
      setMapError('Erro ao inicializar o mapa: ' + (error as Error).message);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      console.log('Submetendo token...');
      setMapError(null);
      setShowTokenInput(false);
      setShouldInitializeMap(true);
    } else {
      setMapError('Por favor, insira um token válido');
    }
  };

  const zoomToRegion = (regionKey: string) => {
    const region = regionsData[regionKey as keyof typeof regionsData];
    if (map.current && region) {
      map.current.flyTo({
        center: region.coordinates as [number, number],
        zoom: region.zoom,
        pitch: 60,
        duration: 2000
      });
      setSelectedRegion(regionKey);
    }
  };

  if (showTokenInput) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-green-800">Configurar Mapa</CardTitle>
            <CardDescription>
              Para exibir o mapa interativo, insira seu token público do Mapbox.
              Obtenha em: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">mapbox.com</a>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="pk.eyJ1IjoiSUQHVF..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            {mapError && (
              <div className="text-red-600 text-sm">
                {mapError}
              </div>
            )}
            <Button onClick={handleTokenSubmit} className="w-full bg-green-600 hover:bg-green-700">
              Carregar Mapa
            </Button>
            <Button 
              onClick={() => {
                setMapboxToken('pk.eyJ1IjoiY29iYW5rMjUiLCJhIjoiY21iYXN6dTFqMHRscjJxcG90cTQ4b3RnaCJ9.UVFmnCyo8FUfZzBlq8BffA');
                handleTokenSubmit();
              }} 
              variant="outline" 
              className="w-full"
            >
              Usar Token Fornecido
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-20">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-green-400">CoBank - Mapa de Demanda</h1>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowTokenInput(true)} 
              variant="outline" 
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white"
            >
              Reconfigurar Token
            </Button>
            <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
        </div>
      </header>

      {mapError && (
        <div className="bg-red-600 text-white p-4 text-center">
          {mapError}
        </div>
      )}

      <div className="flex h-[calc(100vh-80px)]">
        {/* Controls Panel */}
        <div className="w-80 bg-gray-800 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-4">Regiões de Demanda</h2>
              <div className="space-y-3">
                {Object.entries(regionsData).map(([key, region]) => (
                  <Card 
                    key={key} 
                    className={`bg-gray-700 border-gray-600 cursor-pointer transition-all hover:border-green-500 ${
                      selectedRegion === key ? 'border-green-500 bg-gray-600' : ''
                    }`}
                    onClick={() => zoomToRegion(key)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: region.color }}
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-white text-sm">{region.name}</h3>
                          <div className="flex items-center gap-1 text-green-400 text-xs">
                            <Users className="w-3 h-3" />
                            {region.producers.toLocaleString()} produtores
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {selectedRegion && (
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-400 text-lg">
                    {regionsData[selectedRegion as keyof typeof regionsData].name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span className="text-sm">
                      {regionsData[selectedRegion as keyof typeof regionsData].producers.toLocaleString()} pequenos produtores
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-sm">
                      {regionsData[selectedRegion as keyof typeof regionsData].description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-green-400">Controles</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                  onClick={() => map.current?.zoomIn()}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                  onClick={() => map.current?.zoomOut()}
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Card className="bg-green-900/20 border-green-700">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">4.08M</div>
                  <div className="text-sm text-green-300">Total de Produtores</div>
                  <div className="text-xs text-gray-400 mt-1">Mercado TAM Brasil</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-white">
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-green-400" />
              <span className="font-medium">Mapa de Demanda CoBank</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaBrasil;
