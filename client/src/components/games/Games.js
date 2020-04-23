import React from 'react';
import { Redirect } from 'react-router-dom';

import './Games.css';
import CaroPoster from './../../images/caro-poster.png';
import EnglishMCPoster from './../../images/englishmc-poster.jpg';

//components
import Header from './../header/Header';

function Games(props) {
    // const [loggedIn, setLoggedIn] = ( () =>{
    //     let log = false;
    //     const token = localStorage.getItem('user');
    //     if (token) log = true;
    //     return log;
    // });
    return (
        <div>
            <Header />
            <section id="games">
                <div class="container">
                    <h2 class="text-center">Play our game</h2>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 mb-3 filter-item Pro CSS">
                            <a href="/games/englishmc" class="card h-100" style={{ backgroundColor: "#2a4248" }}>
                                <img class="card-img-top" src={EnglishMCPoster} height="230px" alt="Englishmc thumbnail" />
                                <div class="card-body">
                                    <div class="caption">
                                        <div class="card-title">English Flashcard</div>
                                        <div class="card-text">
                                            <div>Learn english new words by pictures</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">View game</button>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3 filter-item Pro CSS">
                            <a href="#" class="card h-100" style={{ backgroundColor: "#311b92" }}>
                                <img class="card-img-top" src={CaroPoster} height="230px" alt="Caro thumbnail" />
                                <div class="card-body">
                                    <div class="caption">
                                        <div class="card-title">Caro XO</div>
                                        <div class="card-text">
                                            <div>A game smart for 2 player</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">Coming soon</button>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
export default Games;