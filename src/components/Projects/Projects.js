import { Component } from "react";
import './Projects.scss';

export default class Projects extends Component{

    render(){

        const projects = [
            {
            id: 1,
            titulo: 'Music House',
            imgUrl: 'https://www.musicdot.com.br/assets/api/share/musicdot.jpg',
            descricao: 'Projeto feito durante o programa Certified Tech Developer na disciplina Front End I',
            repoUrl: 'https://github.com/ALTbruno/projetoFrontEnd',
            deployUrl: 'https://altbruno.github.io/projetoFrontEnd/'
            },
            {
            id: 2,
            titulo: 'To-Do',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/305/305100.png',
            descricao: 'Projeto realizado durante o programa Certified Tech Developer na disciplina Front End II',
            repoUrl: 'https://github.com/ALTbruno/check2',
            deployUrl: 'https://vitusan.github.io/check2/'
            },
            {
            id: 3,
            titulo: 'Landing Page',
            imgUrl: 'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/Sale-icon.png',
            descricao: 'Landing Page de cadastro para receber promoções',
            repoUrl: 'https://github.com/ALTbruno/landing-page-dia-dos-pais',
            deployUrl: 'https://kind-aryabhata-000d8e.netlify.app/'
            }
        ]
        
        return(
            <div class="projects-section" id="projects">
                <ul class="card-list">
                    {projects.map(project => {
                        return(   
                                <li>
                                    <div class="card-project">
                                        <h1>{project.titulo}</h1>
                                        <img src={project.imgUrl} ></img>
                                        <p>{project.descricao}</p>
                                        <ul class="btn-external-links">
                                            <li class="btn-github">
                                                <a href={project.repoUrl} target="_blank">
                                                    <svg enable-background="new -1163 1657.697 56.693 56.693" height="40px" id="Layer_1" version="1.1" viewBox="-1163 1657.697 56.693 56.693" width="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M-1134.6598,1662.9163c-13.601,0-24.63,11.0267-24.63,24.6299   c0,10.8821,7.0573,20.1144,16.8435,23.3713c1.2308,0.2279,1.6829-0.5345,1.6829-1.1849c0-0.587-0.0227-2.5276-0.0334-4.5857   c-6.8521,1.4901-8.2979-2.906-8.2979-2.906c-1.1205-2.8467-2.7347-3.6039-2.7347-3.6039   c-2.2349-1.5287,0.1685-1.4972,0.1685-1.4972c2.473,0.1737,3.7755,2.5385,3.7755,2.5385c2.1967,3.7651,5.7618,2.6765,7.1675,2.0472   c0.2211-1.5917,0.8591-2.6786,1.5637-3.2936c-5.4707-0.6226-11.2218-2.7347-11.2218-12.1722c0-2.6888,0.9623-4.8861,2.538-6.611   c-0.2557-0.6206-1.0989-3.1255,0.2386-6.5183c0,0,2.0684-0.6616,6.7747,2.525c1.9648-0.5458,4.0719-0.8195,6.165-0.829   c2.093,0.0095,4.2017,0.2832,6.17,0.829c4.7012-3.1866,6.7665-2.525,6.7665-2.525c1.3406,3.3928,0.4974,5.8977,0.2417,6.5183   c1.5793,1.7249,2.5348,3.9221,2.5348,6.611c0,9.4602-5.7618,11.5428-11.2465,12.1527c0.8834,0.7644,1.6704,2.2632,1.6704,4.561   c0,3.2955-0.0282,5.9479-0.0282,6.7592c0,0.6556,0.4432,1.4236,1.6915,1.1818c9.7812-3.2605,16.8296-12.4896,16.8296-23.3682   C-1110.0299,1673.943-1121.0574,1662.9163-1134.6598,1662.9163z" fill-rule="evenodd"/><path d="M-1149.9611,1698.2793c-0.0542,0.1227-0.2469,0.1593-0.4222,0.0753c-0.1788-0.0804-0.2788-0.2473-0.2211-0.37   c0.053-0.126,0.2457-0.161,0.4242-0.0769C-1150.0013,1697.9882-1149.8993,1698.1566-1149.9611,1698.2793L-1149.9611,1698.2793z    M-1150.2642,1698.0547"/><path d="M-1148.9634,1699.3922c-0.1174,0.1086-0.3473,0.0581-0.5031-0.1139c-0.1613-0.1718-0.1912-0.4016-0.072-0.5118   c0.1211-0.1088,0.3438-0.0579,0.505,0.1139C-1148.8721,1699.0541-1148.8407,1699.2819-1148.9634,1699.3922L-1148.9634,1699.3922z    M-1149.1984,1699.14"/><path d="M-1147.9922,1700.8105c-0.151,0.1051-0.3979,0.0067-0.5505-0.2123c-0.151-0.2191-0.151-0.4819,0.0035-0.5872   c0.1526-0.1051,0.396-0.0104,0.5505,0.2068C-1147.8381,1700.4406-1147.8381,1700.7034-1147.9922,1700.8105L-1147.9922,1700.8105z    M-1147.9922,1700.8105"/><path d="M-1146.6619,1702.1812c-0.1351,0.1489-0.4227,0.1086-0.6329-0.0945c-0.2155-0.1984-0.2753-0.4803-0.1403-0.6293   c0.1371-0.149,0.4263-0.1072,0.6381,0.0944C-1146.5831,1701.7501-1146.5182,1702.0337-1146.6619,1702.1812L-1146.6619,1702.1812z    M-1146.6619,1702.1812"/><path d="M-1144.8265,1702.9769c-0.0597,0.1927-0.3365,0.2804-0.6154,0.1984c-0.2788-0.0845-0.4608-0.3103-0.4047-0.5051   c0.0577-0.1943,0.3361-0.2855,0.6169-0.1979C-1144.9512,1702.5563-1144.7688,1702.7805-1144.8265,1702.9769L-1144.8265,1702.9769z    M-1144.8265,1702.9769"/><path d="M-1142.8107,1703.1243c0.0067,0.2031-0.2299,0.3716-0.5226,0.3752c-0.2944,0.0067-0.533-0.1577-0.5361-0.3577   c0-0.2052,0.2313-0.3717,0.5258-0.3768C-1143.0509,1702.7594-1142.8107,1702.9227-1142.8107,1703.1243L-1142.8107,1703.1243z    M-1142.8107,1703.1243"/><path d="M-1140.9351,1702.8052c0.035,0.198-0.1686,0.4015-0.4594,0.4557c-0.2859,0.0526-0.5504-0.0701-0.587-0.2665   c-0.0354-0.2031,0.1716-0.4066,0.4573-0.4592C-1141.233,1702.4846-1140.9722,1702.6036-1140.9351,1702.8052L-1140.9351,1702.8052z    M-1140.9351,1702.8052"/></g></svg>
                                                </a>
                                            </li>
                                            <li class="btn-project-website">
                                                <a href={project.deployUrl} target="_blank">
                                                    <svg height="35px" version="1.1" viewBox="0 0 20 20" width="35px" xmlns="http://www.w3.org/2000/svg" xmlnSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-296.000000, -296.000000)"><g id="language" transform="translate(296.000000, 296.000000)"><path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M16.9,6 L14,6 C13.7,4.7 13.2,3.6 12.6,2.4 C14.4,3.1 16,4.3 16.9,6 L16.9,6 Z M10,2 C10.8,3.2 11.5,4.5 11.9,6 L8.1,6 C8.5,4.6 9.2,3.2 10,2 L10,2 Z M2.3,12 C2.1,11.4 2,10.7 2,10 C2,9.3 2.1,8.6 2.3,8 L5.7,8 C5.6,8.7 5.6,9.3 5.6,10 C5.6,10.7 5.7,11.3 5.7,12 L2.3,12 L2.3,12 Z M3.1,14 L6,14 C6.3,15.3 6.8,16.4 7.4,17.6 C5.6,16.9 4,15.7 3.1,14 L3.1,14 Z M6,6 L3.1,6 C4.1,4.3 5.6,3.1 7.4,2.4 C6.8,3.6 6.3,4.7 6,6 L6,6 Z M10,18 C9.2,16.8 8.5,15.5 8.1,14 L11.9,14 C11.5,15.4 10.8,16.8 10,18 L10,18 Z M12.3,12 L7.7,12 C7.6,11.3 7.5,10.7 7.5,10 C7.5,9.3 7.6,8.7 7.7,8 L12.4,8 C12.5,8.7 12.6,9.3 12.6,10 C12.6,10.7 12.4,11.3 12.3,12 L12.3,12 Z M12.6,17.6 C13.2,16.5 13.7,15.3 14,14 L16.9,14 C16,15.7 14.4,16.9 12.6,17.6 L12.6,17.6 Z M14.4,12 C14.5,11.3 14.5,10.7 14.5,10 C14.5,9.3 14.4,8.7 14.4,8 L17.8,8 C18,8.6 18.1,9.3 18.1,10 C18.1,10.7 18,11.4 17.8,12 L14.4,12 L14.4,12 Z" id="Shape"/></g></g></g></svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}