import styled from 'styled-components'

export const Header = styled.div`

    width: 100%;
    height: 60px;
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;

    p{
        font-size: 25px;
        color: #fff;
        font-weight: 500;
    }
    div{
        display: flex;
        gap:15px
    }
    i{
        font-size: 26px;
        background-color:blue;
        color:#fff;
        border-radius:6px;
        padding:4px;
        transition: 0.2s;
    
    }
    .git{
        background-color:black;
        transition: 0.2s;
    }

    i:hover,.git:hover{
        margin-top: -7px;
    }

    @media screen and (max-width:776px)
        {padding:10px 20px;
            p,i{
                font-size: 20px;
            }
        }


`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #05A081;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 30px;
`

export const H1 = styled.h1`
    margin: 32px 0;
    color: #fff;

    @media screen and (max-width:776px)
        {font-size:26px
        }




`

export const ContainerImage = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;


`

export const List = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `

export const Image = styled.img`
    width: 233px;
    height: 350px;
    transform: scale(0.9);
    transition: 0.2s;

    &:hover{
        transform: scale(1);
    }

`
export const Info = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;
    opacity: 0.7;

    &:hover{
        opacity:1;

    }

`
export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top:20px;

    div{
        display: flex;
        gap: 15px;
        align-items:center;
        justify-content: center;
    }
    p{
        color:#fff;
        font-size:40px
    }

    .number{
        color:#ccc;
        font-size:18px
    }


`


export const Button = styled.button`
    background-color: transparent;
    border:none;
    

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
    &:active{
        cursor: pointer;
        opacity: 0.6;
    }

    i{
        font-size: 50px;
        color:#fff
    }
`

export const Footer = styled.div`


    width: 100%;
    height: 60px;
    background-color: #ccc;
    display: flex;
    justify-content: center;

    padding: 10px 20px;
    align-items: center;
    gap: 40px;

    p{
        color:#000;
        font-weight: 500;
        font-size: 18px;
    }


    img{
        height: 40px;
    }
` 