const BookingSkeleton = () => {
  return (
    <tr className="flex items-center gap-10 bg-gray-200 p-5 rounded-lg justify-center">
      <td className="skeleton h-16  shrink-0 rounded-full"></td>
      <td className="skeleton h-16 shrink-0 rounded-full"></td>
      <td className="skeleton h-16  shrink-0 rounded-full"></td>
      <td className="skeleton h-16  shrink-0 rounded-full"></td>
    </tr>
  );
};

export default BookingSkeleton;
