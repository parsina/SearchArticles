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
    this.searchService.findSearchData(this.itemToSearch, this.page, 8).subscribe(data =>
    {
      // I think there is a problem in page numbers returned from API.
      // it returns a different number every time we call it (with same search item)
      // for example if we search 'total ti', it sometimes return 5 page and sometimes return 6 pages
      // So the result number of pages is not stable.
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
    if(this.page > this.maxPages)
      this.page = this.maxPages - 1;
  }
}
