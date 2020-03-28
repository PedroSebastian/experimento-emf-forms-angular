import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JSON Schema Form Material Design App';

  analiseEconomicaSchema = {
    "type": "object",
    "properties": {
      "dataDeInicio": {
        "type": "string",
        "format": "date-time"
      },
      "equipe": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "nome": {
              "type": "string"
            },
            "funcao": {
              "type": "string"
            },
            "custo": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      },
      "faturamento": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dataDoRecurso": {
              "type": "string",
              "format": "date-time"
            },
            "valor": {
              "type": "number"
            },
            "descricao": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "despesasadministrativas": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "agua": {
              "type": "number"
            },
            "luz": {
              "type": "number"
            },
            "telefone": {
              "type": "number"
            },
            "aluguel": {
              "type": "number"
            },
            "internet": {
              "type": "number"
            },
            "marketingPublicidade": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      },
      "treinamento": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "descricao": {
              "type": "string"
            },
            "data": {
              "type": "string",
              "format": "date-time"
            },
            "valor": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      },
      "manuntencao": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "descricao": {
              "type": "string"
            },
            "data": {
              "type": "string",
              "format": "date-time"
            },
            "valor": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      },
      "viagem": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "descricao": {
              "type": "string"
            },
            "data": {
              "type": "string",
              "format": "date-time"
            },
            "valor": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      }
    },
    "additionalProperties": false
  };

  analiseEconomicaUISchema = {
    "type": "VerticalLayout",
    "elements": [
      {
        "type": "Control",
        "label": "Data De Inicio",
        "scope": "#/properties/dataDeInicio"
      },
      {
        "type": "Control",
        "label": "Equipe",
        "scope": "#/properties/equipe"
      },
      {
        "type": "Control",
        "label": "Faturamento",
        "scope": "#/properties/faturamento"
      },
      {
        "type": "Control",
        "label": "Despesasadministrativas",
        "scope": "#/properties/despesasadministrativas"
      },
      {
        "type": "Control",
        "label": "Treinamento",
        "scope": "#/properties/treinamento"
      },
      {
        "type": "Control",
        "label": "Manuntencao",
        "scope": "#/properties/manuntencao"
      },
      {
        "type": "Control",
        "label": "Viagem",
        "scope": "#/properties/viagem"
      }
    ]
  };

  displayData: any = null;

  exampleOnSubmitFn(formData) {
    this.displayData = formData;
  }
}
