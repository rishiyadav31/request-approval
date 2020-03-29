const filterCurrency = amt => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  return formatter.format(amt);
};

const filterApprover = (approvers, approved) => {
  approvers = approvers.sort((a, b) =>
    a.status > b.status ? 1 : b.status > a.status ? -1 : 0
  );
  approvers = approvers.map((app, index) => {
    app.seqId = index + 1;
    return app;
  });
  return approvers.filter(approver =>
    approved ? approver.status === "accepted" : approver.status !== "accepted"
  );
};

const formatDate = date => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  return `${mo} ${da}, ${ye}`;
};

export { filterCurrency, filterApprover, formatDate };
