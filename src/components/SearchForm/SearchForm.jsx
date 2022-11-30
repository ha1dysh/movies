import React from 'react';

export default function SearchForm({
  handleSubmit,
  setSearchParams,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setSearchParams({ query: e.target.value })}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
