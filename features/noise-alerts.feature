Feature: Alertas por niveles altos de ruido

  Como usuario de NoiseGuard
  quiero recibir alertas cuando el ruido supere un límite recomendado
  para tomar precauciones y reducir mi exposición.

  Scenario: Configuración exitosa de alerta
    Given que el usuario se encuentra en la sección de configuración de alertas
    And ingresa un límite máximo de ruido permitido
    When guarda la configuración
    Then el sistema confirma que la alerta fue activada
    And muestra el límite configurado por el usuario

  Scenario: Ruido supera el límite configurado
    Given que el usuario tiene una alerta activa
    And el sistema detecta un nivel de ruido superior al límite configurado
    When se procesa la medición
    Then el sistema muestra una notificación de alerta
    And recomienda alejarse de la fuente de ruido o reducir la exposición

  Scenario: Usuario ingresa un valor inválido
    Given que el usuario se encuentra configurando una alerta
    And ingresa un valor vacío o fuera del rango permitido
    When intenta guardar la configuración
    Then el sistema muestra un mensaje de error
    And solicita ingresar un valor válido en decibeles
