import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList: any = [
    {
      source: 'Bussiness Wire',
      date: 'Feb 22, 2016',
      title: 'New Study Shows One Critical Industry Lagging Behind in Software Security',
      content: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'
    },

    {
      source: 'Chain Store Age',
      date: 'Feb 18, 2016',
      title: 'Billabong taps NetSuite to power omnichannel strategy',
      content: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'
    },

    {
      source: 'Chain Store Age',
      date: 'Feb 10, 2016',
      title: 'AlphaGo and the Declining Advantage of Big Companies',
      content: 'Panelists at CIIs spring conference discuss governance implications of shift in US firms approach to capital allocation When it comes to uses of cash, investors are slightly schizophrenic about...'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
