import Airtable from 'airtable'


const base = new Airtable({apiKey: `${process.env.AIRTABLE_PAT}`}).base('appEQqEHppOAyuAiQ');


const table = base('Panel Review');
const tableBody = baseBody('Grant Applicant Data')


const getMinifiedRecords = (records) =>{
   if (records.length > 0) {
    return records.map(record => minifyRecord(record))} ;
}

const minifyRecord = record =>{
    return{
        id: record.id, 
        fields: record.fields,
        
    };
};




export {base, table, tableBody, getMinifiedRecords, minifyRecord};

