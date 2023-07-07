const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const pageSize = params.pageSize;
    const pageOffset = (params.pageNo-1)*pageSize;
    console.log("pageSize:"+ pageSize + "pageOffset:"+ pageOffset);
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ? '+ 
                    'order by matches.name '+
                    `limit ${pageSize} offset ${pageOffset};`;
    const parameters = [ params.name , pageSize, pageOffset];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}