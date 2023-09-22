import { Component } from '@angular/core';

@Component({
  selector: 'result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss']
})
export class ResultSummaryComponent {


  // variables created by mehh

  resultItems = [
    {
      img: '../../../assets/images/icon-reaction.svg',
      text: 'Reaction',
      marks: 80,
      total: 100,
    },
    {
      img: '../../../assets/images/icon-memory.svg',
      text: 'Memory',
      marks: 92,
      total: 100,
    },
    {
      img: '../../../assets/images/icon-verbal.svg',
      text: 'Verbal',
      marks: 61,
      total: 100,
    },
    {
      img: '../../../assets/images/icon-visual.svg',
      text: 'Visual',
      marks: 72,
      total: 100,
    },
  ];

  classStyleMap: { [key: string]: string } = {
    Reaction: 'red_text',
    Memory: 'yellow_text',
    Verbal: 'green_text',
    Visual: 'blue_text',
  };

  getTextClass(text: string): string {
    if (text in this.classStyleMap) {
      return this.classStyleMap[text];
    }
    return '';
  }

  getBackGroundClass(text:string):string{
    switch (text) {
      case 'Reaction':
        return 'red_bg'
      case 'Memory':
        return 'yellow_bg'
      case 'Verbal':
        return 'green_bg'
      case 'Visual':
        return 'blue_bg'
    }
    return '';
  }

  // Angular built in functions

  // forms and functions created by mehh
}
