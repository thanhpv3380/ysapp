import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as action from './../../../constants/ActionTypes';
//css
import './EnglishMC.css';
//components 
import Header from './../../header/Header';

function handleData(words) {
    let data = [];
    const len = words.length;
    for (let i in words) {
        console.log(i);
        // random c1
        let ans_1 = Math.floor(Math.random() * (len - 0));
        while (ans_1 == i) {
            ans_1 = Math.floor(Math.random() * (len - 0));
        }
        console.log(ans_1);
        //random c2
        let ans_2 = Math.floor(Math.random() * (len - 0));
        while (ans_2 == i || ans_2 == ans_1) {
            ans_2 = Math.floor(Math.random() * (len - 0));
        }

        let ans = {
            word: words[i].word,
            image1: words[i].image,
            image2: words[ans_1].image,
            image3: words[ans_2].image,
            answer: 1
        }
        data.push(ans);
    }
    //console.log(data[1]);
    return data;

}
function EnglishMC(props) {
    const [current, setCurrent] = useState({});
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        async function getQuestionEnglishMcGame() {
            try {
                let config = {
                    headers: {
                        'Authorization': localStorage.getItem('user')
                    }
                }
                const res = await axios.get(`${action.URL}/games/englishmc`, config);
                let data = handleData(res.data);
                //console.log(data[0]);
                setCurrent({
                    pos: 0, 
                    ...data[0]
                });
                setQuestions(data);
            } catch (err) {
                console.log(err);
            }
        }
        getQuestionEnglishMcGame();
    }, []);
    const handleNext = (e) =>{
        e.preventDefault();
        if (current.pos === questions.length - 1){
            setCurrent({
                pos: 0,
                ...questions[0]
            });
        } else {
            setCurrent({
                pos: current.pos+1,
                ...questions[current.pos+1]
            });
        }
    }
    const handleBack = (e) =>{
        e.preventDefault();
        if (current.pos != 0){
            setCurrent({
                pos: current.pos-1,
                ...questions[current.pos-1]
            });
        }
    }
    return (
        <div>
            <Header />
            <section id="games">
                <div class="container">
                    <div class="create-table">
                        Câu {current.pos+1}: what does "{current.word}" mean?
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 mb-3 filter-item Pro CSS">
                            <a href="#" class="card h-100" style={{ backgroundColor: "#2a4248" }}>
                                <img class="card-img-top"
                                    src={current.image1}
                                    height="230px" alt="Cascade thumbnail" />
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3 filter-item Pro CSS">
                            <a href="#" class="card h-100" style={{ backgroundColor: "#2a4248" }}>
                                <img class="card-img-top"
                                    src={current.image2}
                                    height="230px" alt="Cascade thumbnail" />

                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3 filter-item Pro CSS">
                            <a href="#" class="card h-100" style={{ backgroundColor: "#2a4248" }}>
                                <img class="card-img-top"
                                    src={current.image3}
                                    height="230px" alt="Cascade thumbnail" />
                            </a>
                        </div>
                    </div>
                    <div class="btn-engselect-game">
                        <div class="btn-engselect">
                            <button class="btn btn-danger mr-3" onClick={handleBack}>Back</button>
                            <button class="btn btn-success" onClick={handleNext}>Next</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default EnglishMC;