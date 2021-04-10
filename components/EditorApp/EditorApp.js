
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useRef, Component} from "react";

import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import SearchList from '../SearchList/SearchList';
import CardListComp from '../CardList/CardList';
import FileReader from '../FileReader/FileReader';




export default class products extends Component{


    constructor(props){
        super(props);
        this.state = {
            test : null,
            search : "",
            cardId : 0,
            CardList : [],
            data : [],
            file : null,
            printing : false,
        };
    }
    
    setTest = (state) => {this.setState({test: state})};
    
    setSearch = (state) => {this.setState({search: state})};
    setCardId= (state) => {this.setState({cardId : state})};

    //setting up Cardlist logic

    newCard = () => {
        this.props.setCardList([...this.props.CardList,{list:[]}]);
    }

    deleteCard = () => {
       this.deleteAnyCard(this.state.cardId);
    }

    deleteAnyCard = (id)=> {
        const l1 = this.props.CardList.slice(0,id);
        const l2 = this.props.CardList.slice(id + 1, this.props.CardList.length);
        
        this.props.setCardList([...l1, ...l2]);
    }

    newProduct = (product)=>{
        this.setSearch("");
        if (!this.props.CardList[this.state.cardId]) {
            return;
        }
        this.props.CardList[this.state.cardId].list.push(product);
        
        this.update();
    }
    popProduct = ()=>{
        if (!this.props.CardList[this.state.cardId]) {
            return;
        }
        this.props.CardList[this.state.cardId].list.pop();
        this.update();
    }

    update= ()=>{
        this.newCard();
        this.deleteAnyCard(this.props.CardList.length);
    }

    searchList = () => {
        const list = this.props.data.filter((product)=>(product.name.toLowerCase().includes(this.state.search.trim().toLowerCase())));
        return(<SearchList list={list} action={this.newProduct} active={this.state.search.length>0}></SearchList>);
    }

    //cleaning data
    getList= ()=>{
        //validating data
        if (!this.props.data || !this.props.data[0]) {
            return [1,2,3];
        }

        return this.props.data;
    }

    upload= ()=> {
        
    }

    divWidth = ()=>{
        return this.state.printing ? {width: "20cm"} : {width: "20cm"}; 
    }
    
    //console.log(data);
    render(){ 
        console.log(this.props.data);
        return(<div>
        <div>
        {this.searchList()}
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Procurar {this.state.test}</InputGroup.Text>
                </InputGroup.Prepend>
                
                <FormControl aria-describedby="basic-addon1" onChange= {(e)=>this.setSearch(e.target.value)}/>
                
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={()=>{this.newCard()}}>Nova Etiqueta</Button>
                    <Button variant="outline-secondary" onClick={()=>{this.deleteCard()}}>Apagar Etiqueta</Button>
                    <Button variant="outline-secondary" onClick={()=>{this.popProduct()}}>Apagar Produto</Button>
                    <Button variant="outline-secondary" onClick={()=>{this.print()}}>Imprimir</Button>
                    
                </InputGroup.Prepend>
                <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input isValid type="file" onChange={(e)=>{this.setState({file : e.target.files[0]});console.log(e.target.files[0]);}}/>
                    <Form.File.Label data-browse="Button text">
                        Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                </Form.File>
            </InputGroup>

            <FileReader file={this.state.file}></FileReader>
            
           
        </div>

        
        
        <div className="print" style = {this.divWidth()}>
            <CardListComp CardList={this.props.CardList} setCardId={this.setCardId}></CardListComp> 
        </div>   
        </div>);
        }
}