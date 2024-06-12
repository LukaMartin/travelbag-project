export default function Counter({ totalNumberOfItems, numOfItemsPacked }) {
  return (
    <p><b>{numOfItemsPacked}</b> / {totalNumberOfItems} items packed</p>
  )
}
