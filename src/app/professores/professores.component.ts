import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  profForm: FormGroup;
  title =' Professores';
  selectProf: Professor;
  modalRef?: BsModalRef;

  public profs = [
    {id: 1, nome: 'Laura',  sobrenome: 'Kent', disciplina: 'matematica'},
    {id: 2, nome: 'Chico', sobrenome: 'Lizz', disciplina: 'geografia'},
    {id: 3, nome: 'Vinicios', sobrenome: 'Souza', disciplina: 'ciências'},
    {id: 4, nome: 'Jose', sobrenome: 'Marie', disciplina: 'português'},    
    {id: 5, nome: 'Mark', sobrenome: 'Rock', disciplina: 'historia'}
  ];


  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  constructor(private fb: FormBuilder, private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm(){
    this.profForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['',Validators.required],
      disciplina: ['',Validators.required]
    });
  }

  profSubmit(){
    console.log(this.profForm.value);
  }

profSelect(prof: Professor){
  this.selectProf = prof;
  this.profForm.patchValue(prof);
}
  voltar(){
    this.selectProf = null;
  }


}
