import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
// import { OpenAI } from "openai";
import { filter, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  // const openai = new OpenAI({apiKey: process.env['OPEN_AI_SECRET']});

  constructor() { }

  readonly configuration = new Configuration({
    apiKey: environment.OPEN_AI_SECRET
  });
  
  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string) {
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 256
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
        console.log(data);
    });
  }

}

