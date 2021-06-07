import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EntityService } from "src/app/service/entity.service";

@Component({
  selector: 'entity-list',
  templateUrl: './entity-list.html',
  styleUrls: ['./entity-list.scss']
})
export class EntityListComponent implements OnInit {

  dataSource$: Observable<any>;
  displayedColumns: string[];

  constructor(private entityService: EntityService) {
  }

  @Input() apiRoute: string;
  @Input() entityColumns: any[];


  ngOnInit(): void {
    this.dataSource$ = this.entityService.get(this.apiRoute);
    this.displayedColumns = this.entityColumns?.map(e => e.field);
  }
}