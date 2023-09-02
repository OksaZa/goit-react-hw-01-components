import { styled } from "styled-components";

export const Thead = styled.thead`
    background-color: #f8f8f8;
    th {
        padding: 10px;
        text-align: left;
    }
`

export const Tbody = styled.tbody`
    tr {
        background-color: #ffffff;
        &:nth-child(odd) {
            background-color: #f8f8f8;
        }
        td {
            padding: 10px;
            text-align: left;
        }
    }
`
export const Table = styled.table`
    background-color: #f8f8f8;
    width: 370px;
    box-shadow: -6px -6px 12px 1px rgba(0, 0, 255, .2);
    margin-bottom: 30px;
`