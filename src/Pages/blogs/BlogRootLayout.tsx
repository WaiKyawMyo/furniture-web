import { Suspense } from "react";
import { Outlet } from "react-router";

const BlogRootLayout = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center">Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default BlogRootLayout;
