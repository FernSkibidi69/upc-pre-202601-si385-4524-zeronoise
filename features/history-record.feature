Feature: Historial de mediciones de ruido

  Como usuario de NoiseGuard
  quiero revisar mi historial de mediciones
  para analizar los momentos y lugares donde estuve expuesto a mayor ruido.

  Scenario: Visualización exitosa del historial
    Given que el usuario ha realizado mediciones anteriormente
    When ingresa a la sección "Historial"
    Then el sistema muestra una lista de mediciones registradas
    And muestra fecha, hora, ubicación y nivel de ruido en decibeles

  Scenario: Usuario no tiene mediciones registradas
    Given que el usuario no ha realizado mediciones anteriormente
    When ingresa a la sección "Historial"
    Then el sistema muestra el mensaje "Aún no tienes mediciones registradas"
    And ofrece la opción de iniciar una nueva medición

  Scenario: Filtrar historial por fecha
    Given que el usuario se encuentra en la sección "Historial"
    And existen mediciones registradas en diferentes fechas
    When selecciona un rango de fechas
    Then el sistema muestra solo las mediciones correspondientes a ese rango
    And mantiene visible la opción para limpiar el filtro
