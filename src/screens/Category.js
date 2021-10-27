export default function Category({ category, onCategoryClicked }) {
  return (
    <div
      onClick={() => {
        onCategoryClicked(category.id);
      }}
      className="category-item"
      style={{ background: category.isSelected ? "#272b2f" : "#212529",
      borderColor: category.isSelected ? "#eb480b" : "white",
      color: category.isSelected ? "#eb480b" : "white" }}
    >
      <p>{category.name}</p>
    </div>
  );
}
