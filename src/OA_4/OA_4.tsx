import { useState } from "react";

interface IComment {
  time: string;
  likes: number;
  value: string;
}
const OA_4 = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const resetForm = () => {
    setInputValue("");
    setIsEditMode(false);
  };
  const formValidation = () => {
    if (!inputValue.trim()) {
      alert("input is empty");
      return false;
    }
    return true;
  };
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValidation()) return;
    const newComment = {
      time: new Date().toLocaleString(),
      likes: 0,
      value: inputValue,
    };
    setComments([...comments, newComment]);
    resetForm();
  };

  const handleLikes = (id: string) => {
    const updatedList = comments.map((comment) => {
      return comment.time === id
        ? { ...comment, likes: comment.likes + 1 }
        : comment;
    });
    setComments(updatedList);
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter(({ time }) => time !== id));
  };

  const handleEditComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newList = comments.map((comment, index) => {
      return index === selectedIndex
        ? {
            ...comment,
            time: new Date().toLocaleString(),
            value: inputValue,
          }
        : comment;
    });
    setComments(newList);

    resetForm();
  };

  return (
    <div>
      <form onSubmit={isEditMode ? handleEditComment : handleAddComment}>
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button>{isEditMode ? "Save" : "Add"}</button>
      </form>

      <div>
        <p>Comments</p>
        {comments.map(({ time, likes, value }, index) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={time}
            >
              <span>{`[${time}] "${value}" [Likes ${likes}]`} </span>
              <button onClick={() => handleLikes(time)}>Like</button>
              <button
                onClick={() => {
                  setIsEditMode(true);
                  setSelectedIndex(index);
                  setInputValue(value);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDeleteComment(time)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OA_4;
