import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefa-list.html',
  styleUrls: ['./tarefa-list.css']
})
export class TarefaListComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas() {
    this.tarefaService.getAll().subscribe((data: Tarefa[]) => {
      this.tarefas = data;
    });
  }

  excluir(id: number) {
    this.tarefaService.delete(id).subscribe(() => {
      this.loadTarefas();
    });
  }

  concluir(id: number) {
  this.tarefaService.concluir(id).subscribe(() => {
    this.loadTarefas();
  });
}
}