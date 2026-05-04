import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarefa-form.html',
  styleUrls: ['./tarefa-form.css']
})
export class TarefaFormComponent {

  tarefa: Tarefa = {
    id: 0,
    titulo: '',
    descricao: '',
    status: 'Pendente',
    dataCriacao: new Date()
  };

  constructor(private tarefaService: TarefaService) {}

  salvar() {
    this.tarefaService.create(this.tarefa).subscribe(() => {
      alert('Tarefa criada!');
      location.reload();
    });
  }
}