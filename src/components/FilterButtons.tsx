interface FilterButtonsProps {
  currentFilter: "all" | "completed" | "pending";
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={currentFilter === "pending" ? "active" : ""}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterButtons;
