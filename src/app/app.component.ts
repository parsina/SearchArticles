import {Component, OnInit} from '@angular/core';
import {SearchService} from "./service/search.service";
import {DataSource} from "@angular/cdk/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  searchResult: DataSource<any>;
  page: number;
  maxPages: number;
  itemToSearch: string;

  columns: string[] = ['item'];

  constructor(private searchService: SearchService)
  {
  }

  ngOnInit(): void
  {
    this.initializeSearch("");
  }

  initializeSearch(item)
  {
    this.page = 0;
    item ? this.itemToSearch = item: this.itemToSearch = "";
    this.searchItem();
  }

  searchItem()
  {
    this.searchService.findSearchData(this.itemToSearch, this.page, 10).subscribe(data =>
    {
      this.maxPages = data.nbPages;
      this.searchResult = data.hits;
    });
  }

  previousPage()
  {
    if (this.page > 0) {
      this.page--;
      this.searchItem();
    }
  }

  nextPage()
  {
    if (this.page < this.maxPages) {
      this.page++;
      this.searchItem();
    }
  }
}
