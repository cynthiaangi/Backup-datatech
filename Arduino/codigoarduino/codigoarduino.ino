#include "DHT.h" // Trás da biblioteca codigos e calculos mais complexos para usar os resultados
 

#define TIPO_SENSOR DHT11 // Define o tipo de sensor que sera usado
const int PINO_SENSOR_DHT11 = A0; // define o ponto de partida dos dados

DHT sensorDHT(PINO_SENSOR_DHT11, TIPO_SENSOR); 

void setup() { //configura o sensor
  Serial.begin(9600);
  sensorDHT.begin();
}

void loop() { // inicia um loop de coleta de dados continuo sobre temperatura e umidade

  float umidade = sensorDHT.readHumidity();
  float temperatura = sensorDHT.readTemperature();
  int umimax = 80;
  int tempmax = 40;
  

if (isnan(temperatura) || isnan (umidade)) { //insere um sistema de decisão 
  Serial.println("Erro ao ler os dados do sensor");

} else {
  if(umidade > 100){
    umidade = 100;
  }
  if(temperatura > 100){
    temperatura = 100;
  }
  Serial.print(umidade);

  Serial.print(";");

  Serial.println(temperatura);

}

delay (2000);
}
