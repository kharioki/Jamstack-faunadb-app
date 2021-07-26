import LinkCard from "./LinkCard";

function LinkList({ links, refreshLinks }) {
  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links &&
        links.filter(link => !link.archived).map((link, index) => (
          <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
        ))
      }

      <h2 className="my-4">Archived Links</h2>
      {links &&
        links.filter(link => link.archived).map((link, index) => (
          <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
        ))
      }
    </div>
  )
}

export default LinkList;