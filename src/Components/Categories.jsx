import styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categories } from "./data";
import { mobile } from "../responsive";

const Container =styled.div`
    display: flex;
    padding: 20px;
    background-color: #F9F9F9;
    justify-content: space-between;
    ${mobile({padding:"0px",flexDirection:"column"})}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
