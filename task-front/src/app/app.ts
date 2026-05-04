import { Component } from '@angular/core';
import { TarefaListComponent } from './components/tarefa-list/tarefa-list';
import { TarefaFormComponent } from './components/tarefa-form/tarefa-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarefaListComponent, TarefaFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}