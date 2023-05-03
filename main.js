import './style.css'
import { DataService } from './services/data-service';
import confetti from 'canvas-confetti'


console.log('ciao')


DataService.getFacts().then(data=>{
  console.log(data)
  displayData(data)
  fireConfetti()
})

function displayData(data){
  const list = document.getElementById('fact-list');
  for (const factObj of data) {
    list.innerHTML += `<li>${factObj.fact}</li>`    
  }
}

function fireConfetti(){
  confetti({
    particleCount: 10000,
    spread: 150,
    origin: { y: 0.6 }
  });
}