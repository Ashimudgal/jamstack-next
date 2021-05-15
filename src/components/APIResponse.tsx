import {GetServerSideProps,InferGetServerSidePropsType,NextPage} from "next";

type Data={
    item:string;
    index:number;
}

interface Props {
  data: {};
}
export const getServerSideProps:GetServerSideProps=async()=>{
//export async function getNewsApiResponseProps(){
  const res=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac9e5992f5a74e408b561022925d7959');
  const data=res.json();
  //:Data =JSON.parse(JSON.stringify(res.json()));
  return{
   props:{
    data
    }
  }
}

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
 //export const NewsBlock : <({data:Data})>=props=>{
// export const NewsBlock =({data}:InferGetServerSidePropsType<GetServerSideProps>)=>
  const NewsBlock: NextPage<Props> = ({ data }:InferGetServerSidePropsType<GetServerSideProps>): JSX.Element =>(
  //{
  <>
      <ul>
        {
         data.forEach(function (value:any){
          <li key={value}>{value}</li>
          })
        }
      </ul> 
  </>
  )

export default NewsBlock;



