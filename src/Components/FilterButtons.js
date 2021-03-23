import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const MarketplaceDropdown = ({platforms, handleFilters}) => {
    const makePlatformOptions = () => {
        return platforms.map(p => <Dropdown.Item eventKey={p}>{p}</Dropdown.Item>)
    }
    return (
        <DropdownButton onSelect={(eventKey) => handleFilters(eventKey)} id="marketplace-filter" title="By Marketplace" className="rounded-pill" variant="info">
            {makePlatformOptions()}
        </DropdownButton>
    )
}

export const TypeDropdown = ({types, handleFilters}) => {
    const makeTypeOptions = () => {
        return types.map(t => <Dropdown.Item eventKey={t}>{t}</Dropdown.Item>)
    }
    return (
        <DropdownButton onSelect={(eventKey) => handleFilters(eventKey)} id="type-filter" title="By Type" className="rounded-pill" variant="info">
            {makeTypeOptions()}
        </DropdownButton>
    )
}