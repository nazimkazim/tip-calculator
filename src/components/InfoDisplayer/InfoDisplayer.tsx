import { InfoDisplayerProps } from "./InfoDisplayer.props"
import './InfoDisplayer.scss';

const InfoDisplayer = ({ label, sum }: InfoDisplayerProps): JSX.Element => {
    return (
        <div className="info-displayer">
            <div className="info-displayer__left-part">
                <span className="info-displayer__label">{label}</span>
                <span className="info-displayer__person">/ person</span>
            </div>
            <span className="info-displayer__sum">${sum.toFixed(2)}</span>
        </div>
    )
}

export default InfoDisplayer