
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  modalRef?: BsModalRef;
  alunoForm: FormGroup;
  title = 'Alunos';
  alunoSelecionado: Aluno;
  simpleText: String;
  
  alunos = [
    {id: 1, nome: 'Marta',  sobrenome: 'Kent', telefone: 12341234123},
    {id: 2, nome: 'Paula', sobrenome: 'Lizz', telefone: 4365236},
    {id: 3, nome: 'Fernando', sobrenome: 'Souza', telefone: 62362346},
    {id: 4, nome: 'Ray', sobrenome: 'Marie', telefone: 3452345},    
    {id: 5, nome: 'Luano', sobrenome: 'Rock', telefone: 332255}
  ];
  


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


    constructor(private fb: FormBuilder, 
                private modalService: BsModalService) { 
      this.criarForm();
    }
  
    ngOnInit(): void {
    }

    criarForm(){
      this.alunoForm = this.fb.group({
        nome: ['', Validators.required],
        sobrenome: ['',Validators.required],
        telefone: ['',Validators.required]
      });
    }

    alunoSubmit(){
      console.log(this.alunoForm.value);
    }
  
  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }

}
