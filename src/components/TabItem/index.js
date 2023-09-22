// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const isActiveTabClass = isActive ? 'active-tab-button' : ''

  return (
    <li className="tab-button-list">
      <button
        type="button"
        className={`tab-button ${isActiveTabClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
