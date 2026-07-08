Feature: Reporte de incidencia sonora

  Como ciudadano urbano
  quiero reportar una incidencia de ruido
  para que la municipalidad pueda revisar el caso y tomar acciones.

  Scenario: Envío exitoso de un reporte de ruido
    Given que el usuario se encuentra en la sección "Reportar incidencia"
    And completa la ubicación, descripción y nivel de ruido
    When presiona el botón "Enviar reporte"
    Then el sistema muestra un mensaje de confirmación
    And genera un número de seguimiento del reporte

  Scenario: Reporte con campos incompletos
    Given que el usuario se encuentra en la sección "Reportar incidencia"
    And deja campos obligatorios sin completar
    When presiona el botón "Enviar reporte"
    Then el sistema muestra un mensaje de error
    And señala los campos que deben completarse

  Scenario: Usuario cancela el reporte
    Given que el usuario está completando un reporte de incidencia
    When presiona la opción "Cancelar"
    Then el sistema muestra una confirmación para descartar el reporte
    And permite volver a la pantalla anterior sin enviar información
