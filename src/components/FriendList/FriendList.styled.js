import { styled } from "styled-components";

export const List = styled.ul`   
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-direction: column;
    width: 370px;
    gap: 12px;
    
    .item {
        background-color: white;
        display: flex;
        align-items: center;
        box-shadow: -3px -3px 6px 1px rgba(0, 0, 255, .2);
        padding: 10px 20px;
        width: 330px;
        .status {
            width: 20px;
            height: 20px;
            background-color: beige;
            border-radius: 50%;
            margin-right: 20px;
            &.true {
                background-color: green;
            }
            &.false {
                background-color: red;
            }
        }
        .avatar {
            width: 80px;
            margin-right: 20px;
            border-radius: 50%;
            background-color: #c6cccced;
            padding: 10px 10px 0px 10px;
            box-shadow: 3px 3px 6px 1px rgba(0, 0, 255, .2);
        }
        .name {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 15px;
            color: #242122;
        }
    }        
`