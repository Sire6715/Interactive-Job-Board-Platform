import { formatDistanceToNow } from "date-fns";

const PostedDate = ({ dateString }: { dateString: string }) => {
  const formatted = formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
  });

  return <span>{formatted}</span>;
};

export default PostedDate;