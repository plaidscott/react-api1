/* eslint-disable*/
import axios from 'axios';

const yodaKey = 'hBdvLGPRO0mshmloVQYJ2IJduD37p1qEwK8jsnB3EPYnGvWH9Z';
const config = { headers: {'X-Mashape-Key':'hBdvLGPRO0mshmloVQYJ2IJduD37p1qEwK8jsnB3EPYnGvWH9Z', 'Accept': 'text/plain'}};

function processInputToTranslate(sentence) {
  console.log('typeof sentence', typeof sentence);
  let string = sentence.split(' ');
  console.log('string', string);
  let processedString = string.join('+');
  console.log('processedString', processedString);
  return processedString;
}

function requestTranslation(sentence) {
  const finishedSentence = processInputToTranslate(sentence);
  return axios.get('https://yoda.p.mashape.com/yoda?sentence=' + finishedSentence, config);
}

const translationHelper = {
  translateInputToTranslate: sentence => {
    return requestTranslation(sentence)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.warn('err in translateInputToTranslate', err);
      });
  }
};

module.exports = translationHelper;
