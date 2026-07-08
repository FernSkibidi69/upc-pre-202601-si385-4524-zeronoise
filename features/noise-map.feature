Feature: Mapa de zonas críticas de ruido

  Como ciudadano urbano
  quiero consultar un mapa con zonas de ruido
  para identificar lugares con mayor contaminación sonora.

  Scenario: Visualización exitosa del mapa de ruido
    Given que el usuario se encuentra en la sección "Mapa"
    And existen mediciones registradas en diferentes zonas
    When el sistema carga la información
    Then muestra un mapa con zonas clasificadas por nivel de ruido
    And utiliza colores o etiquetas para indicar el nivel de riesgo

  Scenario: Ubicación desactivada
    Given que el usuario se encuentra en la sección "Mapa"
    And la ubicación del dispositivo está desactivada
    When intenta visualizar zonas cercanas
    Then el sistema muestra un mensaje indicando que debe activar la ubicación
    And permite continuar viendo información general del mapa

  Scenario: No existen datos disponibles en la zona
    Given que el usuario consulta una zona específica del mapa
    And no existen mediciones registradas en esa ubicación
    When selecciona la zona
    Then el sistema muestra el mensaje "No hay datos disponibles"
    And sugiere realizar una nueva medición de ruido
