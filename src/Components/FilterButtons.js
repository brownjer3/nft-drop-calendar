import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const MarketplaceDropdown = ({platforms}) => {
    const makePlatformOptions = () => {
        return platforms.map(p => <Dropdown.Item>{p}</Dropdown.Item>)
    }
    return (
        <DropdownButton id="dropdown-basic-button" title="By Marketplace" className="rounded-pill" variant="info">
            {makePlatformOptions()}
        </DropdownButton>
    )
}

export const TypeDropdown = ({types}) => {
    const makeTypeOptions = () => {
        return types.map(t => <Dropdown.Item>{t}</Dropdown.Item>)
    }
    return (
        <DropdownButton id="dropdown-basic-button" title="By Type" className="rounded-pill" variant="info">
            {makeTypeOptions()}
        </DropdownButton>
    )
}