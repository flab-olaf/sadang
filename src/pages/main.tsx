import HotelList from "@components/hotel/HotelList";
import ErrorBoundary from "@shared/components/ErrorBoundary";
import { useQueryClient } from "@tanstack/react-query";

function MainPage() {
  const queryClient = useQueryClient();

  return (
    <div>
      <ErrorBoundary
        fallback={({ reset }) => {
          const handleRest = () => {
            queryClient.removeQueries({ queryKey: ["hotels"] });
            reset();
          };

          return <h1 onClick={handleRest}>안녕 !</h1>;
        }}
      >
        <HotelList />
      </ErrorBoundary>
    </div>
  );
}

export default MainPage;
