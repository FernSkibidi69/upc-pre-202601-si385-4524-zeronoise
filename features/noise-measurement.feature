Feature: Medición de ruido en tiempo real

  Como ciudadano urbano
  quiero medir el nivel de ruido de mi entorno
  para saber si estoy expuesto a niveles de ruido perjudiciales.

  Scenario: Medición exitosa del nivel de ruido
    Given que el usuario se encuentra en la pantalla principal de NoiseGuard
    And el usuario otorgó permiso para usar el micrófono
    When presiona el botón "Medir ruido"
    Then el sistema muestra el nivel de ruido en decibeles
    And clasifica el resultado con un color según el nivel de riesgo

  Scenario: Permiso de micrófono denegado
    Given que el usuario se encuentra en la pantalla principal de NoiseGuard
    And el usuario no otorgó permiso para usar el micrófono
    When presiona el botón "Medir ruido"
    Then el sistema muestra un mensaje indicando que necesita activar el permiso del micrófono
    And ofrece la opción de ir a la configuración del dispositivo

  Scenario: Nivel de ruido superior al límite recomendado
    Given que el usuario se encuentra midiendo el ruido de su entorno
    And el nivel registrado supera el límite recomendado
    When el sistema procesa la medición
    Then muestra una alerta visual al usuario
    And recomienda reducir la exposición al ruido
