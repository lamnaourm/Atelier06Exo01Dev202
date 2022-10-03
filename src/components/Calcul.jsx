import React, { Component } from "react";

class Calcul extends Component {
  constructor(props) {
    super(props);

    this.state = {
        capital : 0,
        taux : 0,
        duree : 0,
        mensualite : 0,

    };
  }

  handleOnChange = (evt)=>{
    const name=evt.target.name;
    const value=evt.target.value;

    this.setState({[name]: value})
  }

  calcul = (e)=>{
    e.preventDefault();
    
    let m = (this.state.capital * this.state.taux/100/12) /(1-Math.pow((1+this.state.taux/100/12),-this.state.duree))
    
    this.setState({mensualite: m});
  }
  render() {
    return (
      <div className="calcul" >
        <form onSubmit={this.calcul}>
          <div>
            <label>Capitale emprunte :</label>
            <input type="number" name='capital' value={this.state.capital} onChange={this.handleOnChange}/>
          </div>
          <div>
            <label>Taux d'interet annuel :</label>
            <input type="number" name='taux' value={this.state.taux} onChange={this.handleOnChange}/>
          </div>
          <div>
            <label>Duree de rembourssement :</label>
            <input type="number" name='duree' value={this.state.duree} onChange={this.handleOnChange}/>
          </div>
          <hr></hr>
          <input type="submit" value="Calculer" />
          <div>
            <label>Mensualite :</label>
            <input type="number" name='mensualite' value={this.state.mensualite} disabled />
          </div>
        </form>
      </div>
    );
  }
}

export default Calcul;
