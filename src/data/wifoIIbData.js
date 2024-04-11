import { v4 as uuidv4 } from 'uuid';

const wifoIIbData = [
    {
        name: 'Fairness',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Fairness.mp4',
                slides: '2-Wifo42-PetriNetzeAnalyse.pdf',
                pageNumber: 30,
                id: uuidv4()
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Invarianten',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Invarianten.mp4',
                slides: '2-Wifo42-PetriNetzeAnalyse.pdf',
                id: uuidv4(),
                pageNumber: 36
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Quantitativ',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Quantitativ.mp4',
                slides: '4-Wifo42-WorkflowAnalyse.pdf',
                id: uuidv4(),
                pageNumber: 13
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Soundness',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Soundness.mp4',
                slides: '4-Wifo42-WorkflowAnalyse.pdf',
                id: uuidv4(),
                pageNumber: 1
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Sprachen',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Sprachen.mp4',
                slides: '5-Wifo42-ProzessSprachen.pdf',
                id: uuidv4()
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Workflow',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/Workflow.mp4',
                slides: '3-Wifo42-WorkflowModelle.pdf',
                id: uuidv4(),
                pageNumber: 1
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Einleitung',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.1.1-Einleitung.mp4',
                slides: '1-Wifo42-PetriNetzeGrundlagen.pdf',
                id: uuidv4(),
                pageNumber: 1
            },
        ],
        id: uuidv4()
    },
    {
        name: 'PetriNetze',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.1.2-PetriNetze.mp4',
                slides: '1-Wifo42-PetriNetzeGrundlagen.pdf',
                id: uuidv4(),
                pageNumber: 10
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Ampel',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.1.3-Ampel.mp4',
                slides: '1-Wifo42-PetriNetzeGrundlagen.pdf',
                id: uuidv4(),
                pageNumber: 22
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Erreichbarkeitsgraphen',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.2.4-Erreichbarkeitsgraphen.mp4',
                slides: '2-Wifo42-PetriNetzeAnalyse.pdf',
                id: uuidv4()
            },
        ],
        id: uuidv4()
    },
    {
        name: 'Abdeckungsgraph',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.2.5-Abdeckungsgraph.mp4',
                slides: '2-Wifo42-PetriNetzeAnalyse.pdf',
                id: uuidv4(),
                pageNumber: 20
            },
        ],
        id: uuidv4()
    },
    {
        name: 'BPMN',
        videoURLs: [
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.3-BPMN-Einfuehrung.mp4',
                slides: 'BPMN-Einfuehrung.pdf',
                id: uuidv4()
            },
            {
                url: 'https://data.dws.informatik.uni-mannheim.de/wifo2/2b/wifo-2b.4-BPMN-Fortgeschritten.mp4',
                slides: 'BPMN-Fortgeschritten.pdf',
                id: uuidv4()
            }
        ],
        id: uuidv4()
    },
];

export default wifoIIbData;