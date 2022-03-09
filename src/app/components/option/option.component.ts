import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() item: any ;

  constructor() { }

  ngOnInit(): void {
  }

  getList() {
    return [
      { title: "fipe", value: this.item.fipe_coverage},
      { title: "cobertura", value: this.item.coverage},
      { title: "danos corporais", value: this.item.corporal_damage},
      { title: "danos materiais", value: this.item.materials_damage},
      { title: "danos morais", value: this.item.moral_damage},
      { title: "franquia", value: this.item.deductible_value},
      { title: "tipo franquia", value: this.item.deductible_type},
      { title: "vidros", value: this.item.glasses},
      { title: "guincho", value: this.item.winch},
      { title: "carro reserva", value: this.item.backup_car},
    ]

        // backup_car: "Não contratada"
        // cia: "Porto Seguro"
        // corporal_damage: "R$ 75.000,00"
        // coverage: "COMPREENSIVA"
        // deductible_type: "50% DA OBRIGATÓRIA"
        // deductible_value: "R$ 1.864,00"
       // fipe_coverage: "100,00 %"
       // glasses: "VIDROS, RETROVISORES, LANTERNAS"
        // materials_damage: "R$ 75.000,00"
        // moral_damage: "R$ 10.000,00"
        // value: "R$ 5.532,16"
    // winch: "KM ILIMITADO + CRÉDITO EM APPS DE TRANSPORTE + 6 SERVIÇOS À RESIDÊNCIA"
  }
}
