const mysql = require('../lib/mysql');

const setNews = async params => {

    const fetchTourAndSport = 'select t.id as tourId, t.sportId from tours t, matches m  where m.id= ? and t.id = m.tourId';

    const result = await mysql.query(fetchTourAndSport, [params.matchId]);
    let newsDate = params.newsDate;
    if(!newsDate){
        newsDate = new Date();
    }
    const statement = 'insert ignore into mydb.news (matchId, tourId, sportId, newsDate, title, description) values (?, ?, ?, ?, ?, ?)';
    const parameters = [params.matchId, result[0].tourId, result[0].sportId, newsDate, params.title, params.description];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async params => {
    const statement = 'select * from news where matchId = ?';
    const parameter = [params.matchId];
    return await mysql.query(statement, parameter);
}

const getNewsByTourId = async params => {
    const statement = 'select * from news where tourId = ?';
    const parameter = [params.tourId];
    return await mysql.query(statement, parameter);
}

const getNewBySportId = async params => {
    const statement = 'select * from news where sportId = ?';
    const parameter = [params.sportId];
    return await mysql.query(statement, parameter);
}

module.exports ={
    setNews: setNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewBySportId: getNewBySportId
}