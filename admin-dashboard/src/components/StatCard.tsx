interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm stat-card">
        <div className="card-body">
          <h6 className="text-muted">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
